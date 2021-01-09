import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup.string().required("Kullanıcı adı alanı zorunludur."),
	lastName: yup.string().required("Soyad alanı zorunludur."),
});

export default schema;
