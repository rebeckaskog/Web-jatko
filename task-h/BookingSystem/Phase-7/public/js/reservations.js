const form = document.getElementById("reservationForm");
const messageBox = document.getElementById("reservationsMessage");
const listContainer = document.getElementById("reservationList");
const idField = document.getElementById("reservationId");
const resourceIdField = document.getElementById("resourceId");
const userIdField = document.getElementById("userId");
const startTimeField = document.getElementById("startTime");
const endTimeField = document.getElementById("endTime");
const noteField = document.getElementById("note");
const statusField = document.getElementById("status");
const actionsContainer = document.getElementById("reservationActions");
const API_URL = "/api/reservations";

if (!localStorage.getItem("token")) {
    window.location.href = "/login";
}

function showMessage(text, type = "success"){
    messageBox.textContent = text;
    messageBox.classList.remove("hidden");
    const successClasses = ["border-green-500", "text-green-700", "bg-green-50"];
    const errorClasses = ["border-red-500", "text-red-700", "bg-red-50"];
    messageBox.classList.remove(...successClasses, ...errorClasses);

    if (type === "error"){
        messageBox.classList.add(...errorClasses);
    } else {
        messageBox.classList.add(...successClasses);
    }
    setTimeout(() => messageBox.classList.add("hidden"), 3000);
}

function toISO(local){
    return local ? new Date(local).toISOString() : null;
}

function fromISO(iso){
    return iso ? new Date(iso).toISOString().slice(0, 16) : "";
}

function clearForm(){
    idField.value = "";
    resourceIdField.value = "";
    userIdField.value = "";
    startTimeField.value = "";
    endTimeField.value = "";
    noteField.value = "";
    statusField.value = "active";
    renderActions("create");
}

async function loadReservations(){
    //console.log("luodaan resurssi listaus");
    const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    });
    const data = await res.json();
    //console.log(data.data);
    listContainer.innerHTML = "";
    if (!data.data.length) {
        listContainer.innerHTML = `<p class="text-sm text-black/50">No reservations found.</p>`;
        return;
    }
    data.data.forEach(r => {
        //console.log("testi");
        const item = document.createElement("div");
        item.className = "rounded-2xl border border-black/10 bg-white p-4 hover:bg-black/5 cursor-pointer transition";
        item.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-semibold">Reservation #${r.id}</p>
                    <p class="text-sm text-black/60">Resource: ${r.resource_id} | User: ${r.user_id}</p>
                    <p class="text-xs text-black/50">${new Date(r.start_time).toLocaleString()} → ${new Date(r.end_time).toLocaleString()}</p>
                </div>
                <span class="text-xs px-2 py-1 rounded-full ${
                    r.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }">${r.status}</span>
            </div>
        `;
        item.addEventListener("click", () => loadIntoForm(r));
        listContainer.appendChild(item);
    });
}

async function createReservation(payload){
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`},
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to create reservation");
}

async function updateReservation(id, payload){
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`},
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to update reservation");
}

async function deleteReservation(id){
    const res = await fetch(`${API_URL}/${id}`, { 
        method: "DELETE", 
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    });
    if (!res.ok) throw new Error("Failed to delete reservation");
}

function loadIntoForm(r){
    idField.value = r.id;
    resourceIdField.value = r.resource_id;
    userIdField.value = r.user_id;
    startTimeField.value = fromISO(r.start_time);
    endTimeField.value = fromISO(r.end_time);
    noteField.value = r.note || "";
    statusField.value = r.status || "active";
    renderActions("edit");
    window.scrollTo({top: 0, behavior: "smooth"});
}

function renderActions(mode){
    actionsContainer.innerHTML = "";
    if (mode === "create"){
        actionsContainer.innerHTML= `
            <button type="submit"
                class="rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark/80 transition">
                Create reservation
            </button>
        `;
    } else {
        actionsContainer.innerHTML = `
            <button type="submit"
                class="rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark/80 transition">
                Update reservation
            </button>

            <button type="button" id="deleteBtn"
                class="rounded-2xl bg-brand-rose px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark/80 transition">
                Delete reservation
            </button>

            <button type="button" id="clearBtn"
                class="rounded-2xl bg-black/10 px-4 py-3 text-sm font-semibold hover:bg-black/20 transition">
                Clear
            </button>
        `;
        document.getElementById("deleteBtn").onclick = async () => {
            if (!confirm("Delete this reservation?")) return;
            try {
                await deleteReservation(idField.value);
                showMessage("Reservation deleted");
                clearForm();
                loadReservations();
            } catch (err) {
                showMessage(err.message, "error");
            }
        };
        document.getElementById("clearBtn").onclick = clearForm;
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const payload = {
        resourceId: Number(resourceIdField.value),
        userId: Number(userIdField.value),
        startTime: toISO(startTimeField.value),
        endTime: toISO(endTimeField.value),
        note: noteField.value,
        status: statusField.value,
        };
    try {
        if (idField.value) {
            await updateReservation(idField.value, payload);
            showMessage("Reservation updated");
        } else {
            await createReservation(payload);
            showMessage("Reservation created");
        }
        clearForm();
        loadReservations();
    } catch (err) {
        showMessage(err.message, "error");
    }
});

renderActions("create");
loadReservations();


