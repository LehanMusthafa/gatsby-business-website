import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/Button/Button"
import { ButtonInner } from "../globalStyles"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <h1 style={{ marginTop: "20px" }}>404: Not Found</h1>
      <p style={{ textAlign: "center", padding: "20px" }}>
        You just hit a route that doesn&#39;t exist...
      </p>
      <Link to="/">
        <Button>
          <ButtonInner>Back To Home</ButtonInner>
        </Button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
