import React from 'react';

function createIncrementArray(number: number) {
  return Array.from({ length: number }, (_, index) => index);
}

type ProductsSkeletonProps = {
  rowsLength?: number;
  columnsLength?: number;
};

export default function ProductsSkeleton({
  rowsLength = 1,
  columnsLength = 3,
}: ProductsSkeletonProps) {
  const rows = createIncrementArray(rowsLength);
  const columns = createIncrementArray(columnsLength);

  return (
    <div className="flex flex-col gap-y-[50px]">
      {rows.map((row, rowIndex) => (
        <div key={row} className="flex gap-x-10">
          {columns.map((column, columnIndex) => (
            <div
              key={column}
              className="flex w-[calc(50%-6px)] flex-col xl:w-auto"
            >
              <div
                style={{
                  animationDelay: `${100 * (columnIndex + 1 + rowIndex + 1)}ms`,
                }}
                className="mb-3 w-full animate-pulse bg-stylish-gray-lightest xl:mb-5 xl:h-[480px] xl:w-[360px]"
              />
              <div className="mb-2.5 xl:mb-5">
                <ul className="flex gap-x-1.5 xl:gap-x-2.5">
                  <li
                    style={{
                      animationDelay: `${
                        200 * (columnIndex + 1 + rowIndex + 1)
                      }ms`,
                    }}
                    className="h-3 w-3 animate-pulse border border-stylish-gray-lightest bg-stylish-gray-lightest xl:h-6 xl:w-6"
                  />
                  <li
                    style={{
                      animationDelay: `${
                        300 * (columnIndex + 1 + rowIndex + 1)
                      }ms`,
                    }}
                    className="h-3 w-3 animate-pulse border border-stylish-gray-lightest bg-stylish-gray-lightest xl:h-6 xl:w-6"
                  />
                  <li
                    style={{
                      animationDelay: `${
                        400 * (columnIndex + 1 + rowIndex + 1)
                      }ms`,
                    }}
                    className="h-3 w-3 animate-pulse border border-stylish-gray-lightest bg-stylish-gray-lightest xl:h-6 xl:w-6"
                  />
                </ul>
              </div>
              <div className="group/products-text flex flex-col gap-y-2">
                <p
                  style={{
                    animationDelay: `${
                      300 * (columnIndex + 1 + rowIndex + 1)
                    }ms`,
                  }}
                  className="h-5 w-60 animate-pulse rounded-md bg-stylish-gray-lightest text-xs font-normal tracking-[2.4px] text-stylish-gray-darker group-hover/products-text:underline group-hover/products-text:decoration-1 xl:text-xl xl:tracking-[4px]"
                />
                <p
                  style={{
                    animationDelay: `${
                      400 * (columnIndex + 1 + rowIndex + 1)
                    }ms`,
                  }}
                  className="h-5 w-16 animate-pulse rounded-md bg-stylish-gray-lightest text-xs font-normal tracking-[2.4px] text-stylish-gray-darker group-hover/products-text:underline group-hover/products-text:decoration-1 xl:text-xl xl:tracking-[4px]"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

ProductsSkeleton.defaultProps = {
  rowsLength: 1,
  columnsLength: 3,
};
