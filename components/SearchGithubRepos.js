import Fieldset from 'device-agnostic-ui/Fieldset.mjs';
import Textbox from 'device-agnostic-ui/Textbox.mjs';
import { useCallback, useState } from 'react';
import { SearchGithubReposResult } from './SearchGithubReposResult';

export function SearchGithubRepos() {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchChange = useCallback(({ target: { value } }) => {
    setSearchQuery(value);
  }, []);

  return (
    <section>
      <Fieldset legend="Search GitHub repos">
        <Textbox
          type="search"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search GitHub repos"
        />
      </Fieldset>
      {!!searchQuery && <SearchGithubReposResult searchQuery={searchQuery} />}
    </section>
  );
}
