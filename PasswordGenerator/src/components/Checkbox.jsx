/* eslint-disable react/prop-types */

const Checkbox = ({key, title, state, onChange}) => {
    return (
        <div key={key}>
            <input
              type="checkbox"
              checked={state}
              onChange={onChange}
            />
            <label>{title}</label>
          </div>
    );
};

export default Checkbox;