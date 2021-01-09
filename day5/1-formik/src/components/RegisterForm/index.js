import React from "react";

import styles from "./styles.module.css";
import { useFormik } from "formik";
import validations from "./validations";

function RegisterForm() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
		},
		onSubmit: (values, bag) => {
			console.log(values);
			console.log(bag);

			setTimeout(() => {
				bag.setSubmitting(false);
			}, 1000);
		},
		validationSchema: validations,
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
						id="firstName"
						name="firstName"
						placeholder="First Name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.firstName && formik.touched.firstName && (
						<div className={styles.error}>{formik.errors.firstName}</div>
					)}
				</div>

				<div>
					<label>Last Name</label>
					<input
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.lastName && formik.touched.lastName && (
						<div className={styles.error}>{formik.errors.lastName}</div>
					)}
				</div>
				<button type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Loading..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
