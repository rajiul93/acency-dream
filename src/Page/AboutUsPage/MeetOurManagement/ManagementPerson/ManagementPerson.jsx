const ManagementPerson = ({item}) => {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={item?.image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start text-start">
        <h2 className="card-title"><item.icon_1  className="text-primary"/>{item?.name}</h2> 
        <div className="card-actions "><item.icon_2  className="text-primary"/>{item?.position}</div>
        <div className="card-actions"><item.icon_3  className="text-primary"/>{item?.education}</div>
      </div>
    </div>
  );
};

export default ManagementPerson;
