"use client";

import { createUrl, getAllVariantTypes, getValuesByOption } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface VariantProps {
  data: Product;
  showDetail?: boolean;
}

const VariantSelector = ({ data }: VariantProps) => {
  const options = getAllVariantTypes(data);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      {options.map((option) => {
        const valuesByOption = getValuesByOption(data, option);

        return (
          <div key={"blank" + option}>
            <div key={option} className="flex flex-col mb-4">
              <label
                key={"option_2" + option}
                className="text-lg sm:text-xl font-semibold"
              >
                {option}
              </label>
            </div>
            <div key={`option_${option}`} className="flex flex-col mb-4">
              <div
                className="flex flex-row flex-wrap gap-4 w-fit-content"
                key={`value_${option}}`}
              >
                {valuesByOption?.map((value) => {
                  const optionNameLowerCase = option.toLowerCase();
                  const optionSearchParams = new URLSearchParams(
                    searchParams.toString()
                  );
                  optionSearchParams.set(optionNameLowerCase, value.name);
                  const optionUrl = createUrl(pathname, optionSearchParams);
                  const isActive =
                    searchParams.get(optionNameLowerCase) === value.name;

                  return (
                    <button
                      className={cn(
                        "min-w-[70px] rounded-full border bg-neutral-100 px-2 py-1 text-md",
                        { "ring-2 ring-black": isActive }
                      )}
                      key={`button_${value.value}`}
                      onClick={() => {
                        router.push(optionUrl, { scroll: false });
                      }}
                    >
                      {option === "Color" ? (
                        <div className="flex" key={`button_div_${value.value}`}>
                          {" "}
                          {value.name}{" "}
                          <div
                            className="mt-[1.5px]  ml-1 w-5 h-5 rounded-full border border-black"
                            style={{ backgroundColor: value.value }}
                            key={`button_div_2_${value.value}`}
                          ></div>
                        </div>
                      ) : (
                        value.value
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VariantSelector;
