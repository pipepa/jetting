import RangeFilter from "./RangeFilter"
import CheckboxFilter from "./CheckboxFilter"
import ButtonFilter from "./ButtonFilter"
import { useFlightsResults } from '@/components/flights/FlightsResultsContext'
// import Tags from "./Tags"

const Sidebar = () => {
  const { filtersData } = useFlightsResults()

  return (
    <>
    {filtersData && filtersData.map((item, index) => {
      return (
        <div className={`sidebar__item ${index == 0 ? '-no-border' : ''}`} key={index}>
          {item.type == 'checkboxes' ? (
            <CheckboxFilter title={item.title} checkboxes={item.items} />
          ) : item.type == 'range' ? (
            <RangeFilter title={item.title} minValue={item.minValue} maxValue={item.maxValue} description={item.description} />
          ) : (
            <ButtonFilter title={item.title} buttons={item.items} />
          )}
        </div>
      )
    })}
    
    {/* <div className="sidebar__item">
      <div className="row mb-10">
        <div className="col-auto d-flex align-items-center">
          <h5 className="text-16 fw-500">Options</h5>
        </div>
      </div>
      <div className="row x-gap-5 y-gap-10">
        <Tags />
      </div>
    </div> */}

    </>
  );
};

export default Sidebar;
