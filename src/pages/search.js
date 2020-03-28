import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO
      title="Search Posts"
      description="Um blog de um desenvolvedor de software, apaixonado pelo que faz, fã do ecosistema Javascript e novas tecnologias."
    />
    <Search />
  </Layout>
)

export default SearchPage
