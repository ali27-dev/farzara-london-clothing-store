import styled from "styled-components";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Lowest Price", value: "lowPrice" },
  { label: "Highest Price", value: "highPrice" },
  { label: "Winter", value: "winter" },
  { label: "Summer", value: "summer" },
  { label: "Featured", value: "featured" },
  { label: "Best Selling", value: "bestSelling" },
];
const FilterBarWrapper = styled.div`
  position: relative;
  margin: 5rem 0;
`;
const SortToggleBtn = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-brand-600);
    color: var(--color-grey-0);
    border: none;
    border-radius: 1.2rem;
    padding: 0.7rem 1.7rem;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    margin: 0 auto 1rem auto;
    box-shadow: 0 2px 8px 0 rgba(191, 167, 122, 0.07);
  }
`;
const StyledFilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 1rem 5vw 1rem 5vw;
    background: var(--color-grey-0);
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.07);
    border-radius: 1.2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 3.2rem;
    z-index: 1000;
    display: none;
    &.open {
      display: flex;
    }
  }
`;
const FilterBtn = styled.button`
  background: var(--color-grey-0);
  color: var(--color-brand-600);
  border: 2px solid var(--color-brand-600);
  border-radius: 1.2rem;
  padding: 0.7rem 1.7rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover,
  &.active {
    background: var(--color-brand-600);
    color: var(--color-grey-0);
  }
  @media (max-width: 600px) {
    padding: 0.7rem 1.2rem;
    font-size: 1.05rem;
    min-width: 100%;
    border-radius: 0.7rem;
  }
`;

function FilterBar({
  sortOpen,
  setSortOpen,
  activeFilter,
  setActiveFilter,
  filterBarRef,
  setVisibleCount,
}) {
  return (
    <FilterBarWrapper>
      <SortToggleBtn onClick={() => setSortOpen((v) => !v)}>
        Sort & Filter
        <span aria-hidden>{sortOpen ? "▲" : "▼"}</span>
      </SortToggleBtn>
      <StyledFilterBar
        ref={filterBarRef}
        className={sortOpen ? "open" : ""}
        onClick={() => setSortOpen(false)}
      >
        {FILTERS.map((f) => (
          <FilterBtn
            key={f.value}
            className={activeFilter === f.value ? "active" : ""}
            onClick={() => {
              setActiveFilter(f.value);
              setVisibleCount(20);
              setSortOpen(false);
            }}
          >
            {f.label}
          </FilterBtn>
        ))}
      </StyledFilterBar>
    </FilterBarWrapper>
  );
}

export default FilterBar;
