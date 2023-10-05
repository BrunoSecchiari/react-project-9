import styles from './Notification.module.css';

const Notification = (props) => {
  let currentStyle = '';

  if (props.status === 'error') {
    currentStyle = styles.error;
  }
  if (props.status === 'success') {
    currentStyle = styles.success;
  }

  const finalStyle = `${styles.notification} ${currentStyle}`;

  return (
    <section className={finalStyle}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
