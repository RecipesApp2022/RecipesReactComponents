import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const RatingComponent = ({ numberOfStars = 5, value = 1, onClickStar, disabled = false, size = 'md' }) => {

    const [hoverValue, setHoverValue] = useState(undefined);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        setStars(Array(numberOfStars).fill(0));
    }, [numberOfStars])

    const handleClick = (value) => {
        if (!disabled) onClickStar?.(value);
    }

    const handleMouseOver = newHoverValue => {
        if (!disabled) setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        if (!disabled) setHoverValue(undefined)
    }
    return (
        <div style={styles.stars}>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={sizes[size]}
                        onClick={() => {
                            if (!disabled) handleClick(index + 1)
                        }}
                        onMouseOver={() => {
                            if (!disabled) handleMouseOver(index + 1)
                        }}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || value) > index ? colors.orange : colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                    />
                )
            })}
        </div>
    )
}

const sizes = {
    xl: 96,
    lg: 48,
    md: 24,
    sm: 12,
    xs: 6
}

const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
    }
};

export default RatingComponent;