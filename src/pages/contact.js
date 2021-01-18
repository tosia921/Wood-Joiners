import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo';

import Contact from '../components/ContactSection/Contact.component'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title='Contact' description='Contact MJ Joiners'/>
            <Contact/>
        </Layout>
    )
}

export default ContactPage;