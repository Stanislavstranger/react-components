import classes from './Select.module.css';

interface SelectProps {
  options: { value: number; name: string }[];
  defaultValue: string;
  value: number;
  onChange: (value: number) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(+event.target.value)}
      className={classes.select}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
