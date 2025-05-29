const faqs = [
  {
    id: 1,
    question: 'What is this platform about?',
    answer:
      "Our platform allows users to share travel experiences, post content about destinations, and interact with the community through reactions and scoring. It's designed to provide accurate, user-driven information about places around the world.",
  },
  {
    id: 2,
    question: 'Do I need to create an account to use the platform?',
    answer:
      'To browse posts, create posts, react to content, and engage with the scoring system, you need to sign up.',
  },
  {
    id: 3,
    question: 'Is the platform free to use?',
    answer:
      'Yes! Creating an account, posting content, and engaging with the community are all free.',
  },
  {
    id: 4,
    question: 'How do I create a post?',
    answer:
      'After logging in, click the Create Post button, tag a destination, upload a photo or video, and share your experience. Posts must be linked to a specific location.',
  },
  {
    id: 5,
    question: 'Can I add a destination that is not listed?',
    answer:
      'Yes! You can submit a Request a Destination form. Our team will review it and add it if it meets our guidelines.',
  },
  {
    id: 6,
    question: 'What kind of content is allowed on the platform?',
    answer:
      'We encourage travel-related, informative, and engaging content. However, posts that contain spam, hate speech, misinformation, or explicit content will be removed.',
  },
  {
    id: 7,
    question: 'Can I delete or edit my post after publishing?',
    answer:
      'Yes, you can edit or delete your posts from your profile under the My Posts section.',
  },
  {
    id: 8,
    question: 'How accurate is the translation feature?',
    answer:
      'We use AI-powered translation services to provide the best results. However, automatic translations may not always be perfect.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>

        {/* Grid container fix */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex flex-col items-start">
              <dt className="text-base/7 font-semibold text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
