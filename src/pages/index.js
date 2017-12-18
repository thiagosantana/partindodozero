import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
	<div>
		<h1 />
		<p>Bem vindo ao meu novo Blog.</p>
		<p>
			Ainda é um trabalho em desenvolvimento, mas se prepare para um
			conteúdo inspirador em breve.
		</p>
		<Link to="/hello-world/">Primeiro post</Link>
	</div>
);

export default IndexPage;
