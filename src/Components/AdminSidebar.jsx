import React, { useEffect } from 'react'
import Link from 'next/link'

export default function AdminSidebar() {
    let [role, setRole] = React.useState("")
    useEffect(() => {
        setRole(localStorage.getItem("role")??"")
    }, [])
    return (
        <div className="list-group">
            <Link href="/admin" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-home'></i><span className='float-end'>Home</span></Link>
            <Link href="/admin/maincategory" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-th-large'></i><span className='float-end'>Maincategory</span></Link>
            <Link href="/admin/subcategory" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-list'></i><span className='float-end'>Subcategory</span></Link>
            <Link href="/admin/brand" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-trademark'></i><span className='float-end'>Brand</span></Link>
            <Link href="/admin/product" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-cubes'></i><span className='float-end'>Product</span></Link>
            <Link href="/admin/feature" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-puzzle-piece'></i><span className='float-end'>Features</span></Link>
            <Link href="/admin/faq" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-question'></i><span className='float-end'>Faq</span></Link>
            <Link href="/admin/setting" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-gear'></i><span className='float-end'>Settings</span></Link>
            <Link href="/admin/newsletter" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-envelope'></i><span className='float-end'>Newsletter</span></Link>
            <Link href="/admin/contactus" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-phone'></i><span className='float-end'>Contact Us</span></Link>
            <Link href="/admin/checkout" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-shopping-bag'></i><span className='float-end'>Checkouts</span></Link>
            <Link href="/admin/seodata" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-arrow-up'></i><span className='float-end'>SEO Data</span></Link>
            {role === "Super Admin" ? <Link href="/admin/user" className="list-group-item list-group-item-action" aria-current="true"><i className='fs-4 fa fa-users'></i><span className='float-end'>Users</span></Link> : null}
        </div>
    )
}
