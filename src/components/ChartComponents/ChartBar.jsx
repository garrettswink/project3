import "./ChartBar.css"

export function ChartBar(props) {
    let fillHeight = "0%";

    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div className="chart-bar-fill" style={{height: fillHeight}}></div>
            </div>
            <div className="chart-bar-label">{props.label}</div>
        </div>
    )
}