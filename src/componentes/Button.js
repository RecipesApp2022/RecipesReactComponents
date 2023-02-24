import clsx from "clsx";

const Button = ({ tag = 'button', type = 'button', className, children, ...props}) => {
    const Tag = tag;
    
    return <Tag
        className={clsx("inline-flex items-center justify-center bg-main text-white hover:bg-main-light hover:text-white font-bold py-2.5 px-4 rounded-lg leading-none", className)}
        type={tag === 'button' ? type : null}
        {...props}
    >
        {children}
    </Tag>
}

export default Button;