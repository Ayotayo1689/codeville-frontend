import React, { useEffect } from 'react';
import Image from 'next/image';

const DMCABadge = () => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a href="//www.dmca.com/Protection/Status.aspx?ID=c9162fa8-e4a9-4239-855d-fff14ceb669e" title="DMCA.com Protection Status" className="dmca-badge">
            <Image
                src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-10.png?ID=c9162fa8-e4a9-4239-855d-fff14ceb669e"
                alt="DMCA.com Protection Status"
                width={237.5} // 5% less than 250
                height={47.5} // 5% less than 50
                priority
            />
        </a>
    );
};

export default DMCABadge;
