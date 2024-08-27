function share(socialNetwork) {
  const url = window.location.href;
  let shareUrl;

  switch (socialNetwork) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
      break;
    case 'whatsapp':
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
      break;
    case 'telegram':
      shareUrl=`https://t.me/share/url?url=${encodeURIComponent(url)}`
  }

  window.open(shareUrl, '_blank');
}