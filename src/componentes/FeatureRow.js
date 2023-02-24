import clsx from "clsx";

const FeatureRow = ({ title, content, className, titleClassName, contentClassName }) => {
    return <div className={clsx('md:flex py-2', className)}>
        <p className={clsx('w-1/2', titleClassName)}>{title}</p>
        <div className={clsx('w-1/2', contentClassName)}>{content}</div>
    </div>
}

export default FeatureRow;