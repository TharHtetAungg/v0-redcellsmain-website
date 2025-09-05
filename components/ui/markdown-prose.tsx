interface MarkdownProseProps {
  content: string
}

export function MarkdownProse({ content }: MarkdownProseProps) {
  return (
    <div
      className="prose prose-invert prose-lg mx-auto max-w-none 
                 prose-headings:text-white prose-p:text-muted-foreground 
                 prose-a:text-primary prose-strong:text-white 
                 prose-ul:text-muted-foreground prose-li:marker:text-primary"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
