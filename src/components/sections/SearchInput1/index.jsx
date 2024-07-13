import React from "react";
import classNames from "classnames";

export default function ({
  className,
  placeholder,
  value,
  onChange,
  onSearch,
}) {
  return (
    <div className={classNames(["widget-search", className])}>
      <form
        action="#"
        method="get"
        role="search"
        className="search-form relative"
      >
        <input
          type="search"
          id="search"
          className="search-field"
          placeholder={placeholder}
          name="s"
          title="Search for"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          className="search search-submit"
          type="button"
          title="Search"
          onClick={onSearch}
        >
          <i className="icon-search" />
        </button>
      </form>
    </div>
  );
}
