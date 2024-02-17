// components/SSLTrustLogo.js

import { useEffect } from 'react';
import Head from 'next/head';

export default function SSLTrustLogo() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.TrustLogo) {
            window.TrustLogo("https://tantainnovatives.com/assets/ssl-trust-logo.png", "SC5", "none");
        }
    }, []);

    return (
        <Head>
            <script type="text/javascript">
                {`
          var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.trust-provider.com/" : "http://www.trustlogo.com/");
          document.write(unescape("%3Cscript src='" + tlJsHost + "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));
        `}
            </script>
        </Head>
    );
}

