import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Hero"
import Services from "../components/Services"
import Code from "../components/Code"
import Company from "../components/Company"
import Slider from "../components/Slider/Slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Services />
    <Code />
    <Company />
    <Slider />
  </Layout>
)

export default IndexPage
