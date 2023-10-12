"use client";

import { createUrl, getAllVariantTypes, getValuesByOption } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
        const optionNameLowerCase = option.toLowerCase();
        // Base option params on current params so we can preserve any other param state in the url.
        const optionSearchParams = new URLSearchParams(searchParams.toString());
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
              <label
                className="flex flex-row flex-wrap gap-4"
                key={`value_${option}}`}
              >
                {valuesByOption?.map((value) => {
                  optionSearchParams.set(optionNameLowerCase, value.name);

                  return (
                    <button
                      className="min-w-[70px] rounded-full border bg-neutral-100 px-2 py-1 text-md"
                      key={`button_${value.value}`}
                      onClick={() => {
                        router.push(pathname + "?a=a");
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
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VariantSelector;
