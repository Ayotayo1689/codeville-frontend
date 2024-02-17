import { useRouter } from 'next/router';

const Breadcrumb = () => {
    const router = useRouter();

    // create the breadcrumb list
    const pathList = router.asPath.split('/');
    pathList.shift();  // remove the first element since it's empty

    // create the breadcrumb JSON-LD schema
    const breadcrumbList = pathList.map((path, i) => {
        return {
            "@type": "ListItem",
            "position": i+1,
            "name": path,
            "item": `${window.location.protocol}//${window.location.hostname}/${pathList.slice(0, i+1).join('/')}`
        }
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbList
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
            <nav aria-label="breadcrumb">
                {pathList.map((path, i) => (
                    <span key={i}>
            {i !== 0 && " > "}
                        {i === pathList.length - 1 ? (
                            <span>{path}</span>
                        ) : (
                            <a href={`/${pathList.slice(0, i+1).join('/')}`}>{path}</a>
                        )}
          </span>
                ))}
            </nav>
        </>
    )
}

export default Breadcrumb;
