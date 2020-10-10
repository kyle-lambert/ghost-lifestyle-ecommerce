import React, { useState } from "react";
import * as S from "./StyledFormSelect.js";

import Icon from "../../components/Icon";

function FormSelect({
  label,
  options,
  selectedValue,
  selectName,
  handleChange,
  children,
}) {
  const onChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    handleChange(name, value);
  };

  // return (
  //   <>
  //     <S.Label>{label}</S.Label>
  //     <S.SelectWrapper>
  //       <select
  //         name={selectName}
  //         value={selectedValue}
  //         onChange={onChange}
  //         className="select">
  //         {options.map((option) => (
  //           <option key={option.id} value={option.id}>
  //             {option.name}
  //           </option>
  //         ))}
  //       </select>

  //       <span className="icon">
  //         <Icon expandMore />
  //       </span>
  //     </S.SelectWrapper>
  //   </>
  // );

  return (
    <>
      <S.Label>{label}</S.Label>
      <S.SelectWrapper>
        {children}
        <span className="icon">
          <Icon expandMore />
        </span>
      </S.SelectWrapper>
    </>
  );
}

export default FormSelect;
