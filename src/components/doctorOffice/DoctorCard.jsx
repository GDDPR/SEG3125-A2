const cardClassNames = {
    default: 'doctor-card',
    details: 'doctor-details',
    info: 'doctor-info-box',
};

function DoctorCard({ children, className = '', variant = 'default' }) {
    const baseClassName = cardClassNames[variant] || cardClassNames.default;
    const fullClassName = className ? `${baseClassName} ${className}` : baseClassName;

    return (
        <div className={fullClassName}>
            {children}
        </div>
    );
}

export default DoctorCard;
