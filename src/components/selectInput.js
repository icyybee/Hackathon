export default function SelectInput({ label, placeholder, name, options, value, onChange, errorMessage }) {
    return (
        <div className='w-full flex flex-col'>
            <label className='text-[14px]'>{label}</label>
            <select className="mt-[11px] w-full" name={name} value={value} onChange={onChange}>
                <option value=''>{placeholder}</option>
                {options && options.map((o, id) => (
                    <option key={id} value={o.id}>{o.name}</option>
                ))}
            </select>
            {errorMessage && <p className="text-red-500 mt-2">This field is required</p>}
        </div>
    )
}