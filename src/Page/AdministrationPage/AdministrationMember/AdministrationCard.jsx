import PropTypes from 'prop-types';

const AdministrationCard = ({person}) => {
    return (
        <div
       
        className="card card-compact bg-base-100 shadow-xl  mx-auto"
      >
        <figure>
          <img
            src={person.image}
            alt="Administration Member"
            className="max-h-[350px] object-cover w-full"
          />
        </figure>
        <div className="card-body">
          <p className="flex items-start gap-4 font-bold">
            <person.icon_1 className="text-primary" />
            {person.name}
          </p>
          <p className="flex items-start gap-4">
            <person.icon_2 className="text-primary" />
            {person.position}
          </p>
          <p className="flex items-start gap-4">
            <person.icon_3 className="text-primary" />
            {person.education}
          </p>
        </div>
      </div>
    );
};

export default AdministrationCard;

AdministrationCard.propTypes ={
    person: PropTypes.object
}