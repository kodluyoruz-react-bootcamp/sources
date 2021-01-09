import React from "react";

import { useFormik } from "formik";

function RegisterForm() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
		},
		onSubmit: (values, bag) => {
			console.log(values);

			setTimeout(() => {
				bag.setSubmitting(false);
			}, 1000);
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>isDirty: {formik.dirty.toString()}</div>
				<div>isSubmitting: {formik.isSubmitting.toString()}</div>
				<br />
				<br />
				<div>
					<label>First Name</label>
					<input
						name="firstName"
						placeholder="First Name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						// onBlur={handleBlur}
						disabled={formik.isSubmitting}
					/>
				</div>

				<div>
					<label>Last Name</label>
					<input
						name="lastName"
						placeholder="Last Name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						// onBlur={handleBlur}
						disabled={formik.isSubmitting}
					/>
				</div>
				<button type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Loading..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
