interface BreadcrumbComponentProps {
    title?: string,
    links?: string
}

function BreadcrumbComponent({title, links}: BreadcrumbComponentProps) {
    return (
        <>
            <div className="breadcumb-area overlay pos-rltv">
                <div className="bread-main">
                    <div className="bred-hading text-center">
                        <h5>{title}</h5></div>
                    <ol className="breadcrumb" dangerouslySetInnerHTML={{__html:links ? links: ""}}>

                    </ol>
                </div>
            </div>
        </>
    )
}


export default BreadcrumbComponent

