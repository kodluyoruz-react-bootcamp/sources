import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, FormattedDate } from "react-intl";

import messages from "./messages";

const hasLocale = localStorage.getItem("lang");
const defaultLang = hasLocale ? hasLocale : navigator.language;

function App() {
	const [lang, setLang] = useState(defaultLang);

	useEffect(() => {
		localStorage.setItem("lang", lang);
	}, [lang]);

	return (
		<IntlProvider locale={lang} messages={messages[lang]}>
			<div className={`App ${lang === "ar-AR" ? "rtl" : ""}`}>
				<button onClick={() => setLang("tr-TR")}>TR</button>
				<button onClick={() => setLang("en-US")}>EN</button>
				<button onClick={() => setLang("ar-AR")}>عربى</button>

				<div>
					<FormattedMessage id="home.title" />
				</div>
				<div>
					<FormattedMessage id="home.welcomeMessage" />
				</div>
				<div>
					<FormattedMessage id="home.packageCount" values={{ count: 3 }} />
				</div>

				<div>
					<FormattedDate value={new Date()} dateStyle="full" />
				</div>
			</div>
		</IntlProvider>
	);
}

export default App;
