import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const inputIdRef = useRef(`RampInputCheckbox-${id}`);

  const handleCheckBox=()=>{
        onChange(!checked)
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputIdRef.current}>
       <label htmlFor={inputIdRef.current} className={classNames("RampInputCheckbox--label", {
        "RampInputCheckbox--label-checked": checked,
        "RampInputCheckbox--label-disabled": disabled,
      })}>
      </label>
      <input
        id={inputIdRef.current}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={handleCheckBox}
      />
    </div>
  )
}
