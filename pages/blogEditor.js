import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import useWithAuth from '../components/hoc/useWithAuth'

import SlateEditor from '../components/slateEditor/Editor'

const BlogEditor = (props) => (
  <BaseLayout {...props.auth}>
    <BasePage className="blog-editor-page" title="Write Your Story...">
      <SlateEditor />
    </BasePage>
  </BaseLayout>
)

export default useWithAuth('siteOwner')(BlogEditor);