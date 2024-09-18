import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaComponent = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://en.alasayeltours.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Our Cars",
                "item": "https://en.alasayeltours.com/#/ourcars"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "About Us",
                "item": "https://en.alasayeltours.com/#/aboutus"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact Us",
                "item": "https://en.alasayeltours.com/#/contactus"
            }
        ]
    }


    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default SchemaComponent;
