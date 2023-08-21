export default function NewUserButton({ onAddNewUserClick }) {
  return (
    <button className='btn-add btn' onClick={() => onAddNewUserClick()}>
      Add new user
    </button>
  );
}
