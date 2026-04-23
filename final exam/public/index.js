let selectedCustomer = null;
const formField = document.getElementById("form-field");
const idInput = document.getElementById("customer-id");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const birthDate = document.getElementById("birth-date");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const clearButton = document.getElementById("clear-button");

async function loadCustomers() {
  const container = document.getElementById("customer-list");

  try {
    const res = await fetch("/api/persons");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    // Clear placeholder
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No customers found.</p>";
      return;
    }

    // Create simple list
    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "customer-card";

      div.innerHTML = `
        <strong>${person.first_name} ${person.last_name}</strong><br>
        Email: ${person.email}<br>
        Phone: ${person.phone || "-"}
      `;

      div.addEventListener("click", () => {
        console.log("Customer clicked:", person);
        selectCustomer(person);
      });

      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p style='color:red;'>Error loading data</p>";
  }
}

function selectCustomer(person) {
  selectedCustomer = person;

  idInput.value = person.id ?? "";
  firstName.value = person.first_name || "";
  lastName.value = person.last_name || "";
  emailInput.value = person.email || "";
  phoneNumber.value = person.phone || "";
  birthDate.value = person.birth_date || "";

  saveButton.textContent = "Save changes";
  deleteButton.disabled = false;
} 

function resetForm() {
  selectedCustomer = null;

  idInput.value = "";
  firstName.value = "";
  lastName.value = "";
  emailInput.value = "";
  phoneNumber.value = "";
  birthDate.value = "";

  saveButton.textContent = "Add customer";
  deleteButton.disabled = true;
}

clearButton.addEventListener("click", () => {
  resetForm();
  });

formField.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    first_name: firstName.value.trim(),
    last_name: lastName.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneNumber.value.trim(),
    birth_date: birthDate.value || null,
  };

  if (!payload.first_name || !payload.last_name || !payload.email) {
    alert("First and last name and email is required");
    return;
  }

  try {
    let url = "/api/persons";
    let method = "POST";
    if (selectedCustomer && selectedCustomer.id) {
      url =`/api/persons/${selectedCustomer.id}`;
      method = "PUT";
    }
    const res = await fetch(url, {
      method,
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to save customer");
    }

    resetForm();
    await loadCustomers();
  } catch (err) {
    console.error(err);
    alert("Error in saving the customer");
  }
});

deleteButton.addEventListener("click", async () => {
  if (!selectedCustomer || !selectedCustomer.id) return;
  const confirmDelete = confirm(
    `Delete customer ${selectedCustomer.first_name} ${selectedCustomer.last_name}?`
  );
  if (!confirmDelete) return;

  try {
    const res = await fetch(`/api/persons/${selectedCustomer.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete customer");
    }
    resetForm();
    await loadCustomers(); 
  } catch (err) {
    console.error(err);
    alert("Error deleting customer.");
  }
});

loadCustomers();
resetForm();
