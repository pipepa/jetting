'use client'

import CheckboxFilter from "../common/CheckboxFilter"
import ButtonFilter from "../common/ButtonFilter"
import RangeFilter from "../common/RangeFilter"
import SingleSelectFilter from "../common/SingleSelectFilter"
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'
//import Map from "./Map";

const Sidebar = () => {
  const { filtersData } = useHotelsResults()

  const renderFilter = (dropdown, index) => {
    switch (dropdown.type) {
      case 'checkboxes':
        return (
          <CheckboxFilter key={index} dropdown={dropdown} isDropdown={false} />
        );
      case 'range':
        return (
          <RangeFilter key={index} dropdown={dropdown} isDropdown={false} />
        );
      case 'buttons':
        return (
          <ButtonFilter key={index} dropdown={dropdown} isDropdown={false} />
        );
      case 'singleSelect':
        return (
          <SingleSelectFilter key={index} dropdown={dropdown} isDropdown={false} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="row y-gap-50">
      {/*<div className="sidebar__item -no-border position-relative">
        <Map />
      </div>*/}
      
      {filtersData && filtersData.map((dropdown, index) => renderFilter(dropdown, index))}
    </div>
  );
};

export default Sidebar;
