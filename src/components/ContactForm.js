export default function () {
	const form = document.createElement("form");
	form.method = "get";
	form.action = "#";
	form.id = "contact-form";

	const title = document.createElement("h2");
	title.classList.add("title");
	title.innerText = "Contact Us";
	form.appendChild(title);

	// name
	const nameLabel = document.createElement("label");
	nameLabel.innerText = "Name";
	nameLabel.for = "name";
	const nameEl = document.createElement("input");
	nameEl.id = "name";
	nameEl.name = "name";
	form.appendChild(nameLabel);
	form.appendChild(nameEl);

	// email
	const emailLabel = document.createElement("label");
	emailLabel.innerText = "Email";
	emailLabel.for = "email";
	const emailEl = document.createElement("input");
	emailEl.id = "email";
	emailEl.name = "email";
	form.appendChild(emailLabel);
	form.appendChild(emailEl);

	// message
	const messageLabel = document.createElement("label");
	messageLabel.innerText = "Message";
	messageLabel.for = "message";
	const messageEl = document.createElement("textarea");
	messageEl.id = "message";
	messageEl.name = "message";
	form.appendChild(messageLabel);
	form.appendChild(messageEl);

	const clearBtn = document.createElement("button");
	clearBtn.type = "reset";
	clearBtn.classList.add("btn");
	clearBtn.innerText = "Clear";
	form.appendChild(clearBtn);

	const submitBtn = document.createElement("button");
	submitBtn.classList.add("btn");
	submitBtn.innerText = "Send";
	form.appendChild(submitBtn);

	return form;
}
