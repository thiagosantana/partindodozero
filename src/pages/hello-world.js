import React from "react";
import Link from "gatsby-link";

const SecondPage = () => (
	<div>
		<h1>Primeiro post!(O retorno)</h1>
		<p>
			Depois de aproximadamente 6 anos, o Partindo do Zero está de volta.
			A idéia surgiu em 2010, quando tive o primeiro contato com o termo
			"nômades digitais".
		</p>
		<p>
			Após esse tempo todo, o assunto está mais difundido, e o mais
			importante, este autor está se preparando para se tornar um também!
		</p>
		<p>
			O objetivo desse blog é falar muito sobre o assunto, e servir como
			um diário dos preparativos para eu me tornar um nômade digital em
			breve. Como desenvolvedor de software, também vamos ter muito
			assunto relacionado a como profissionais de TI podem se beneficiar
			desse fantástico estilo de vida. Vem comigo!
		</p>
		<Link to="/">Go back to the homepage</Link>
	</div>
);

export default SecondPage;
