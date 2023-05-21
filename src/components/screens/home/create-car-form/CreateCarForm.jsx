import styles from './CreateCarForm.module.css';

import {useState} from "react";
import {useForm} from "react-hook-form";

const clearData = {
  name: '',
  price: 0
};

const CreateCarForm = ({setCars}) => {
  const [data, setData] = useState(clearData);

  const createCar1 = (event) => {
    event.preventDefault();

    setCars(prev => [...prev, {
      id: prev.length + 1,
      ...data
    }]);

    setData(clearData);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}} = useForm({
    mode: 'onChange'
  });

  const createCar2 = (data) => {
    console.log(data);

    setCars(prev => [...prev, {
      id: prev.length + 1,
      ...data
    }]);

    reset();
  };

  return (
    <div>
      <form className={styles.form}>
        <label>
          Name
          <input type="text"
                 onChange={event => setData(prev => ({
                   ...prev, name: event.target.value
                 }))}
                 value={data.name}/>
        </label>
        <label>
          Price
          <input type="number"
                 onChange={event => setData(prev => ({
                   ...prev, price: event.target.value
                 }))}
                 value={data.price}/>
        </label>

        <button type="submit" onClick={event => createCar1(event)}> Отправить</button>
      </form>

      <form className={styles.form} onSubmit={handleSubmit(createCar2)}>
        <label>
          Name
          <input type="text" {...register('name', {required: 'Name is required'})}/>
          {errors?.name?.message && <p>{errors.name.message}</p>}
        </label>
        <label>
          Price
          <input type="number" {...register('price', {required: true})}/>
        </label>

        <button type="submit">Отправить</button>
      </form>
    </div>
  )
};

export default CreateCarForm;
