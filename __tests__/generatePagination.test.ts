import { generatePagination } from "../app/lib/utils";
import { describe, it, expect } from "vitest";

describe("generatePagination", () => {
  it("should return all pages when totalPages is 7 or less", () => {
    expect(generatePagination(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generatePagination(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should return correct pagination when currentPage is among the first 3 pages", () => {
    expect(generatePagination(1, 10)).toEqual([1, 2, 3, "...", 9, 10]);
    expect(generatePagination(3, 10)).toEqual([1, 2, 3, "...", 9, 10]);
  });

  it("should return correct pagination when currentPage is among the last 3 pages", () => {
    expect(generatePagination(9, 10)).toEqual([1, 2, "...", 8, 9, 10]);
    expect(generatePagination(10, 10)).toEqual([1, 2, "...", 8, 9, 10]);
  });

  it("should return correct pagination when currentPage is in the middle", () => {
    expect(generatePagination(5, 10)).toEqual([1, "...", 4, 5, 6, "...", 10]);
    expect(generatePagination(6, 10)).toEqual([1, "...", 5, 6, 7, "...", 10]);
  });
});
