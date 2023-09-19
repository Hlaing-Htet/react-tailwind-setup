import { useState } from "react";

import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { MdClose } from "react-icons/md";

export function Search({
  setSearch,
  placeHolder = "Search",
  isOnChange = false,
  searchBtn = true,
  leafIcon,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  placeHolder?: string;
  isOnChange?: boolean;
  searchBtn?: boolean;
  leafIcon?: React.ReactElement;
}) {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = () => {
    setSearch(searchInput);
  };
  const onChange = (e: any) => {
    setSearchInput(e.target.value);
    !e.target.value && setSearch("");
    if (isOnChange && e.target.value.length >= 3) {
      setSearch(e.target.value);
    }
    if (isOnChange && e.target.value.length < 3) {
      setSearch("");
    }
  };
  const handleKeyUp = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      setSearch(searchInput);
    }
  };
  return (
    <div className="flex items-center justify-between w-full gap-5 sm:w-full">
      <div className="relative w-full">
        <Input
          leadIcon={leafIcon && leafIcon}
          value={searchInput}
          onChange={onChange}
          onKeyUp={handleKeyUp}
          className={`${leafIcon && "pl-8"}  border-grey3`}
          placeholder={placeHolder}
        />
        {searchInput && (
          <Button
            onClick={() => {
              setSearchInput("");
              setSearch("");
            }}
            className="absolute top-1 right-2"
            rounded="full"
            variant="outline"
            size="squle1"
          >
            <MdClose />
          </Button>
        )}
      </div>
      {!isOnChange && searchBtn && (
        <Button onClick={onSubmit} className="px-3 sm:px-6">
          Search
        </Button>
      )}
    </div>
  );
}
