import React from 'react'

const BreadcrumbItem = ({ children, ...props }) => (
    <div  {...props}>
        {children}
    </div>
)

const BreadcrumbSep = ({ children, ...props }) => (
    <li className='separate' {...props}>
        {children}
    </li>
)

const Breadcrumb = ({ separator, collapse = {}, ...props }) => {
    let children = React.Children.toArray(props.children)




    const totalNo = children.length
    const lastIndex = totalNo - 1

    children = children.map((child, index) => (
        <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
    ))

    children = children.reduce((num, child, index) => {
        const notLast = index < lastIndex
        if (notLast) {
            num.push(
                child,
                <BreadcrumbSep key={`breadcrumb_sep${index}`}>
                    {separator}
                </BreadcrumbSep>,
            )
        } else {
            num.push(child)
        }
        return num
    }, [])


    return <div className="breadCr">{children}</div>
}

export default Breadcrumb