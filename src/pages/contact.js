import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactSection from "../components/Contact"
import Faq from "../components/Faq"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactSection />
    <Faq />
  </Layout>
)

export default Contact
