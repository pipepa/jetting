'use client'

import TopBreadcrumbs from "@/components/common/breadcrumbs/TopBreadcrumbs"

const Breadcrumbs = ({ dataArrays = [], link = null}) => {
    return (
        <TopBreadcrumbs
            dataArrays={dataArrays}
            link={link}
        />
    )
}

export default Breadcrumbs