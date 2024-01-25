import React from "react";
import { Props } from "./type";
import useModel from "./model";
import Link from "next/link";
import { Down } from "@/shared/icons";
import { Item } from "./type";
import { useTranslation } from "next-i18next";

export const UI: React.FC<Props> = ({ className, items, showOnlyOne }) => {
  const { isShown, isInnerShown, show, showInner } = useModel();

  const { t } = useTranslation("common");

  return (
    <div className={`menu flex flex-col w-full ${className ? className : ""}`}>
      {items?.map((item: Item, i: number) => (
        <Link key={i} href={item.href}>
          <div
            onClick={(e) => {
              if (!item?.isLink) e.preventDefault();
            }}
          >
            <span
              className={`menu-item font-bold text-sm w-full p-2 flex items-center justify-between first:border-t border-b ${
                item?.disabled
                  ? "cursor-not-allowed text-primary-grey"
                  : item?.active
                  ? "cursor-pointer text-primary-orange"
                  : `cursor-pointer text-primary-blue lg:hovertext-primary-orange ${
                      isShown(i) ? "text-primary-orange" : ""
                    } `
              }`}
              onClick={(e) => {
                if (item?.disabled) e.preventDefault();
                if (item?.onClick && !item?.disabled) item.onClick();
              }}
            >
              <span>{t(item.label)}</span>
              {item?.children?.length > 0 && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    if (!item?.disabled) show(i, showOnlyOne);
                  }}
                  className="bg-primary-orange rounded w-8 h-8 flex items-center justify-center"
                >
                  <span
                    className={`text-sm text-white transition-all ${
                      isShown(i) ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <Down />
                  </span>
                </span>
              )}
            </span>
            {item?.children?.length > 0 && (
              <div
                className={`transition-all duration-700 overflow-auto ${
                  isShown(i) ? "max-h-80" : "max-h-0"
                }`}
              >
                {item?.children?.map((child, y) => (
                  <Link key={`${i}_${y}`} href={child.href}>
                    <div
                      onClick={(e) => {
                        if (!child?.isLink) e.preventDefault();
                      }}
                    >
                      <span
                        className={`menu-item font-bold text-sm w-full p-2 pl-6 flex items-center justify-between first:border-t border-b ${
                          child?.disabled
                            ? "cursor-not-allowed text-primary-grey"
                            : child?.active
                            ? "cursor-pointer text-primary-orange"
                            : `cursor-pointer text-primary-blue lg:hovertext-primary-orange ${
                                isInnerShown(`${i}_${y}`)
                                  ? "text-primary-orange"
                                  : ""
                              } `
                        }`}
                        onClick={(e) => {
                          if (child?.disabled) e.preventDefault();
                          if (child?.onClick && !child?.disabled)
                            child.onClick();
                        }}
                      >
                        <span>{t(child.label)}</span>
                        {child?.children?.length > 0 && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              if (!child?.disabled)
                                showInner(`${i}_${y}`, showOnlyOne);
                            }}
                            className="bg-primary-orange rounded w-8 h-8 flex items-center justify-center"
                          >
                            <span
                              className={`text-sm text-white transition-all ${
                                isInnerShown(`${i}_${y}`)
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                            >
                              <Down />
                            </span>
                          </span>
                        )}
                      </span>
                      {child?.children?.length > 0 && (
                        <div
                          className={`transition-all duration-700 overflow-auto ${
                            isInnerShown(`${i}_${y}`) ? "max-h-80" : "max-h-0"
                          }`}
                        >
                          {child?.children?.map((desc, x) => (
                            <Link key={`${i}_${y}_${x}`} href={desc.href}>
                              <div
                                onClick={(e) => {
                                  if (!desc?.isLink) e.preventDefault();
                                }}
                              >
                                <span
                                  className={`menu-item font-bold text-sm w-full p-2 pl-10 flex items-center justify-between first:border-t border-b ${
                                    desc?.disabled
                                      ? "cursor-not-allowed text-primary-grey"
                                      : desc?.active
                                      ? "cursor-pointer text-primary-orange"
                                      : `cursor-pointer text-primary-blue lg:hovertext-primary-orange`
                                  }`}
                                  onClick={(e) => {
                                    if (desc?.disabled) e.preventDefault();
                                    if (desc?.onClick && !desc?.disabled)
                                      desc.onClick();
                                  }}
                                >
                                  <span>{t(desc.label)}</span>
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
