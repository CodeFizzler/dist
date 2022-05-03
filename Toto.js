/*        Toto js V1.1 By Sameervegas
You Can Create Element And Style With Much Less Lines Of Code And 
Also Use Inbuilt Functions That Impulse Your Performance Only By TotoJS
Warning It Makes Your Webpage Smooth And Boost Productivity */

function ele(x) {
  return document.querySelector(x);
}
function alle(x) {
    return document.querySelectorAll(x);
  }
function hide(x) {
  let e = ele(x);
  return (e.style.visibility = "hidden");
}
function show(x) {
  let e = ele(x);
  return (e.style.visibility = "visible");
}
let toggle_value = 1;
function toggle(x, y) {
  let ea = ele(x);
  let eb = ele(y);
  ea.style.visibility = "hidden";
  if (toggle_value < 1) {
    toggle_value = 1;
    return (eb.style.visibility = "visible");
  } else {
    toggle_value = 0;
    return (ea.style.visibility = "visible"), (eb.style.visibility = "hidden");
  }
}
function load(x, y) {
  var xhttp = new XMLHttpRequest();
  (xhttp.onreadystatechange = function () {
    ele(x).textContent = this.responseText;
  }),
    xhttp.open("GET", y, true);
  xhttp.send();
}
function loadHTML(x, y) {
  var xhttp = new XMLHttpRequest();
  (xhttp.onreadystatechange = function () {
    ele(x).innerHTML = this.responseText;
  }),
    xhttp.open("GET", y, true);
  xhttp.send();
}
function eventOff(x) {
  let e = ele(x);
  return (e.style.pointerEvents = "none");
}
function eventOn(x) {
  let e = ele(x);
  return (e.style.pointerEvents = "");
}
function putHTML(x, y) {
  let e = ele(x);
  return (e.innerHTML = y);
}
function putValue(x, y) {
  let e = ele(x);
  return (e.value = y);
}
function putText(x, y) {
  let e = ele(x);
  return (e.textContent = y);
}
function saveData(x, y) {
  return localStorage.setItem(x, y);
}
function getData(x) {
  return localStorage.getItem(x);
}
function updateData(x, y) {
  return localStorage.setItem(x, y);
}
function removeData(x) {
  return localStorage.removeItem(x);
}
function setEvent(y,x) {
  return ele(y).addEventListener(x.event, x.run);
}
function createTag(x,y) {
  let e = document.createElement(x);
  let o;
  for (i = 0; i < Object.keys(y.attribute).length; i++) {
    o = e.setAttribute(
      Object.keys(y.attribute)[i],
      Object.values(y.attribute)[i]
    );
  }
  return (
    o,
    ele(y.append).appendChild(e),
    (e.textContent = y.text),
    (e.style.alignItems = y.alignItems),
    (e.style.animation = y.animation),
    (e.style.animationDelay = y.animationDelay),
    (e.style.animationDirection = y.animationDirection),
    (e.style.animationDuration = y.animationDuration),
    (e.style.animationFillMode = y.animationFillMode),
    (e.style.animationIterationcCount = y.animationIterationCount),
    (e.style.animationName = y.animationMame),
    (e.style.animationPlayDState = y.animationPlayState),
    (e.style.animationTimingFunction = y.animationTimingFunction),
    (e.style.backfaceVisibility = y.backfaceVisibility),
    (e.style.background = y.background),
    (e.style.backgroundAttachment = y.backgroundAttachment),
    (e.style.backgroundClip = y.backgroundClip),
    (e.style.backgroundColor = y.backgroundColor),
    (e.style.backgroundImage = y.backgroundImage),
    (e.style.backgroundOrigin = y.backgroundOrigin),
    (e.style.backgroundPosition = y.backgroundPosition),
    (e.style.backgroundPositionx = y.backgroundPositionC),
    (e.style.backgroundPositiony = y.backgroundPositionY),
    (e.style.backgroundRepeat = y.backgroundRepeat),
    (e.style.backgroundSize = y.backgroundSize),
    (e.style.border = y.border),
    (e.style.borderStyle = y.borderStyle),
    (e.style.borderWidth = y.borderWidth),
    (e.style.borderColor = y.borderColor),
    (e.style.borderBottom = y.borderBottom),
    (e.style.borderBottomColor = y.borderBottomColor),
    (e.style.borderBottomLeftRadius = y.borderBottomLeftRadius),
    (e.style.borderBottomRightRadius = y.borderBottomRightRadius),
    (e.style.borderBottomStyle = y.borderBottomStyle),
    (e.style.borderBottomWidth = y.borderbottomwidth),
    (e.style.borderCollapse = y.borderCollapse),
    (e.style.borderImage = y.borderImage),
    (e.style.borderleft = y.borderLeft),
    (e.style.borderLeftColor = y.borderLeftColor),
    (e.style.borderLeftStyle = y.borderleftStyle),
    (e.style.borderLeftWidth = y.borderLeftWidth),
    (e.style.borderRadius = y.borderRadius),
    (e.style.borderRight = y.borderRight),
    (e.style.borderRightColor = y.borderRightColor),
    (e.style.borderRightStyle = y.borderRightStyle),
    (e.style.borderRightWidth = y.borderRightWidth),
    (e.style.borderSpacing = y.borderSpacing),
    (e.style.borderTop = y.borderTop),
    (e.style.borderTopColor = y.borderTopColor),
    (e.style.borderTopLeftRadius = y.borderTopLeftRadius),
    (e.style.borderTopRightRadius = y.borderTopRightRadius),
    (e.style.borderTopStyle = y.borderTopStyle),
    (e.style.borderTopWidth = y.borderTopWidth),
    (e.style.bottom = y.bottom),
    (e.style.boxShadow = y.boxShadow),
    (e.style.boxSizing = y.boxSizing),
    (e.style.captionSide = y.captionSide),
    (e.style.clear = y.clear),
    (e.style.color = y.color),
    (e.style.columns = y.columns),
    (e.style.columnCount = y.columnCount),
    (e.style.columnFill = y.columnFill),
    (e.style.columnGap = y.columnGap),
    (e.style.columnRule = y.columnRule),
    (e.style.columnRuleColor = y.columnRuleColor),
    (e.style.columnRuleStyle = y.columnRuleStyle),
    (e.style.columnRuleWidth = y.columnRuleWidth),
    (e.style.columnSpan = y.columnSpan),
    (e.style.columnWidth = y.columnWidth),
    (e.style.content = y.content),
    (e.style.counterIncrement = y.counterIncrement),
    (e.style.counterReset = y.counterReset),
    (e.style.cursor = y.cursor),
    (e.style.direction = y.direction),
    (e.style.display = y.display),
    (e.style.emptyCells = y.emptyCells),
    (e.style.float = y.float),
    (e.style.font = y.font),
    (e.style.fontFamily = y.fontFamily),
    (e.style.fontSize = y.fontSize),
    (e.style.fontStyle = y.fontStyle),
    (e.style.fontVariant = y.fontVariant),
    (e.style.fontWeight = y.fontWeight),
    (e.style.height = y.height),
    (e.style.hyphens = y.hyphens),
    (e.style.justifyContent = y.justifyContent),
    (e.style.left = y.left),
    (e.style.letterSpacing = y.letterSpacing),
    (e.style.lineHeight = y.lineHeight),
    (e.style.listStyle = y.listStyle),
    (e.style.listStyleImage = y.listStyleImage),
    (e.style.listStylePosition = y.listStylePosition),
    (e.style.listStyleType = y.listStyleType),
    (e.style.margin = y.margin),
    (e.style.marginBottom = y.marginBottom),
    (e.style.marginLeft = y.marginLeft),
    (e.style.marginRight = y.marginRight),
    (e.style.marginTop = y.marginTop),
    (e.style.maxHeight = y.maxHeight),
    (e.style.maxWidth = y.maxWidth),
    (e.style.minHeight = y.minHeight),
    (e.style.minWidth = y.minWidth),
    (e.style.opacity = y.opacity),
    (e.style.orphans = y.orphans),
    (e.style.outline = y.outline),
    (e.style.outlineColor = y.outlineColor),
    (e.style.outlineStyle = y.outlineStyle),
    (e.style.outlineWidth = y.outlineWidth),
    (e.style.overflow = y.overflow),
    (e.style.overflowX = y.overflowX),
    (e.style.overflowY = y.overflowY),
    (e.style.padding = y.padding),
    (e.style.paddingBottom = y.paddingBottom),
    (e.style.paddingLeft = y.paddingLeft),
    (e.style.paddingRight = y.paddingRight),
    (e.style.paddingTop = y.paddingTop),
    (e.style.pageBreakAfter = y.pageBreakAfter),
    (e.style.pageBreakBefore = y.pageBreakBefore),
    (e.style.pageBreakInside = y.pageBreakInside),
    (e.style.perspective = y.perspective),
    (e.style.perspectiveOrigin = y.perspectiveOrigin),
    (e.style.position = y.position),
    (e.style.quotes = y.quotes),
    (e.style.right = y.right),
    (e.style.tabSize = y.tabSize),
    (e.style.tableLayout = y.tableLayout),
    (e.style.textAlign = y.textAlign),
    (e.style.textAlignLast = y.textAlignLast),
    (e.style.textDecoration = y.textDecoration),
    (e.style.textDecorationColor = y.textDecorationColor),
    (e.style.textDecorationLine = y.textDecorationLine),
    (e.style.textDecorationStyle = y.textDecorationStyle),
    (e.style.textIndent = y.textIndent),
    (e.style.textShadow = y.textShadow),
    (e.style.textTransform = y.textTransform),
    (e.style.top = y.top),
    (e.style.transform = y.transform),
    (e.style.transFormStyle = y.transformStyle),
    (e.style.transition = y.transition),
    (e.style.transitionDelay = y.transitionDelay),
    (e.style.transitionDuration = y.transitionDuration),
    (e.style.transitionProperty = y.transitionProperty),
    (e.style.transitionTimingFunction = y.transitionTimingFunction),
    (e.style.unicodeBidi = y.unicodeBidi),
    (e.style.verticalAlign = y.verticalAlign),
    (e.style.visibility = y.visibility),
    (e.style.whiteSpace = y.whiteSpace),
    (e.style.widows = y.widows),
    (e.style.width = y.width),
    (e.style.wordSpacing = y.wordSpacing),
    (e.style.zIndex = y.zIndex)
  );
}
function createStyle(x,y) {
  let e = document.querySelectorAll(x);
  if (typeof x == "string") {
    for (i = 0; i < e.length; i++) {
      return (
        (e[i].style.alignItems = y.alignItems),
        (e[i].style.animation = y.animation),
        (e[i].style.animationDelay = y.animationDelay),
        (e[i].style.animationDirection = y.animationDirection),
        (e[i].style.animationDuration = y.animationDuration),
        (e[i].style.animationFillMode = y.animationFillMode),
        (e[i].style.animationIterationcCount = y.animationIterationCount),
        (e[i].style.animationName = y.animationMame),
        (e[i].style.animationPlayDState = y.animationPlayState),
        (e[i].style.animationTimingFunction = y.animationTimingFunction),
        (e[i].style.backfaceVisibility = y.backfaceVisibility),
        (e[i].style.background = y.background),
        (e[i].style.backgroundAttachment = y.backgroundAttachment),
        (e[i].style.backgroundClip = y.backgroundClip),
        (e[i].style.backgroundColor = y.backgroundColor),
        (e[i].style.backgroundImage = y.backgroundImage),
        (e[i].style.backgroundOrigin = y.backgroundOrigin),
        (e[i].style.backgroundPosition = y.backgroundPosition),
        (e[i].style.backgroundPositionx = y.backgroundPositionC),
        (e[i].style.backgroundPositiony = y.backgroundPositionY),
        (e[i].style.backgroundRepeat = y.backgroundRepeat),
        (e[i].style.backgroundSize = y.backgroundSize),
        (e[i].style.border = y.border),
        (e[i].style.borderStyle = y.borderStyle),
        (e[i].style.borderWidth = y.borderWidth),
        (e[i].style.borderColor = y.borderColor),
        (e[i].style.borderBottom = y.borderBottom),
        (e[i].style.borderBottomColor = y.borderBottomColor),
        (e[i].style.borderBottomLeftRadius = y.borderBottomLeftRadius),
        (e[i].style.borderBottomRightRadius = y.borderBottomRightRadius),
        (e[i].style.borderBottomStyle = y.borderBottomStyle),
        (e[i].style.borderBottomWidth = y.borderbottomwidth),
        (e[i].style.borderCollapse = y.borderCollapse),
        (e[i].style.borderImage = y.borderImage),
        (e[i].style.borderleft = y.borderLeft),
        (e[i].style.borderLeftColor = y.borderLeftColor),
        (e[i].style.borderLeftStyle = y.borderleftStyle),
        (e[i].style.borderLeftWidth = y.borderLeftWidth),
        (e[i].style.borderRadius = y.borderRadius),
        (e[i].style.borderRight = y.borderRight),
        (e[i].style.borderRightColor = y.borderRightColor),
        (e[i].style.borderRightStyle = y.borderRightStyle),
        (e[i].style.borderRightWidth = y.borderRightWidth),
        (e[i].style.borderSpacing = y.borderSpacing),
        (e[i].style.borderTop = y.borderTop),
        (e[i].style.borderTopColor = y.borderTopColor),
        (e[i].style.borderTopLeftRadius = y.borderTopLeftRadius),
        (e[i].style.borderTopRightRadius = y.borderTopRightRadius),
        (e[i].style.borderTopStyle = y.borderTopStyle),
        (e[i].style.borderTopWidth = y.borderTopWidth),
        (e[i].style.bottom = y.bottom),
        (e[i].style.boxShadow = y.boxShadow),
        (e[i].style.boxSizing = y.boxSizing),
        (e[i].style.captionSide = y.captionSide),
        (e[i].style.clear = y.clear),
        (e[i].style.color = y.color),
        (e[i].style.columns = y.columns),
        (e[i].style.columnCount = y.columnCount),
        (e[i].style.columnFill = y.columnFill),
        (e[i].style.columnGap = y.columnGap),
        (e[i].style.columnRule = y.columnRule),
        (e[i].style.columnRuleColor = y.columnRuleColor),
        (e[i].style.columnRuleStyle = y.columnRuleStyle),
        (e[i].style.columnRuleWidth = y.columnRuleWidth),
        (e[i].style.columnSpan = y.columnSpan),
        (e[i].style.columnWidth = y.columnWidth),
        (e[i].style.content = y.content),
        (e[i].style.counterIncrement = y.counterIncrement),
        (e[i].style.counterReset = y.counterReset),
        (e[i].style.cursor = y.cursor),
        (e[i].style.direction = y.direction),
        (e[i].style.display = y.display),
        (e[i].style.emptyCells = y.emptyCells),
        (e[i].style.float = y.float),
        (e[i].style.font = y.font),
        (e[i].style.fontFamily = y.fontFamily),
        (e[i].style.fontSize = y.fontSize),
        (e[i].style.fontStyle = y.fontStyle),
        (e[i].style.fontVariant = y.fontVariant),
        (e[i].style.fontWeight = y.fontWeight),
        (e[i].style.height = y.height),
        (e[i].style.hyphens = y.hyphens),
        (e[i].style.justifyContent = y.justifyContent),
        (e[i].style.left = y.left),
        (e[i].style.letterSpacing = y.letterSpacing),
        (e[i].style.lineHeight = y.lineHeight),
        (e[i].style.listStyle = y.listStyle),
        (e[i].style.listStyleImage = y.listStyleImage),
        (e[i].style.listStylePosition = y.listStylePosition),
        (e[i].style.listStyleType = y.listStyleType),
        (e[i].style.margin = y.margin),
        (e[i].style.marginBottom = y.marginBottom),
        (e[i].style.marginLeft = y.marginLeft),
        (e[i].style.marginRight = y.marginRight),
        (e[i].style.marginTop = y.marginTop),
        (e[i].style.maxHeight = y.maxHeight),
        (e[i].style.maxWidth = y.maxWidth),
        (e[i].style.minHeight = y.minHeight),
        (e[i].style.minWidth = y.minWidth),
        (e[i].style.opacity = y.opacity),
        (e[i].style.orphans = y.orphans),
        (e[i].style.outline = y.outline),
        (e[i].style.outlineColor = y.outlineColor),
        (e[i].style.outlineStyle = y.outlineStyle),
        (e[i].style.outlineWidth = y.outlineWidth),
        (e[i].style.overflow = y.overflow),
        (e[i].style.overflowX = y.overflowX),
        (e[i].style.overflowY = y.overflowY),
        (e[i].style.padding = y.padding),
        (e[i].style.paddingBottom = y.paddingBottom),
        (e[i].style.paddingLeft = y.paddingLeft),
        (e[i].style.paddingRight = y.paddingRight),
        (e[i].style.paddingTop = y.paddingTop),
        (e[i].style.pageBreakAfter = y.pageBreakAfter),
        (e[i].style.pageBreakBefore = y.pageBreakBefore),
        (e[i].style.pageBreakInside = y.pageBreakInside),
        (e[i].style.perspective = y.perspective),
        (e[i].style.perspectiveOrigin = y.perspectiveOrigin),
        (e[i].style.position = y.position),
        (e[i].style.quotes = y.quotes),
        (e[i].style.right = y.right),
        (e[i].style.tabSize = y.tabSize),
        (e[i].style.tableLayout = y.tableLayout),
        (e[i].style.textAlign = y.textAlign),
        (e[i].style.textAlignLast = y.textAlignLast),
        (e[i].style.textDecoration = y.textDecoration),
        (e[i].style.textDecorationColor = y.textDecorationColor),
        (e[i].style.textDecorationLine = y.textDecorationLine),
        (e[i].style.textDecorationStyle = y.textDecorationStyle),
        (e[i].style.textIndent = y.textIndent),
        (e[i].style.textShadow = y.textShadow),
        (e[i].style.textTransform = y.textTransform),
        (e[i].style.top = y.top),
        (e[i].style.transform = y.transform),
        (e[i].style.transFormStyle = y.transformStyle),
        (e[i].style.transition = y.transition),
        (e[i].style.transitionDelay = y.transitionDelay),
        (e[i].style.transitionDuration = y.transitionDuration),
        (e[i].style.transitionProperty = y.transitionProperty),
        (e[i].style.transitionTimingFunction = y.transitionTimingFunction),
        (e[i].style.unicodeBidi = y.unicodeBidi),
        (e[i].style.verticalAlign = y.verticalAlign),
        (e[i].style.visibility = y.visibility),
        (e[i].style.whiteSpace = y.whiteSpace),
        (e[i].style.widows = y.widows),
        (e[i].style.width = y.width),
        (e[i].style.wordSpacing = y.wordSpacing),
        (e[i].style.zIndex = y.zIndex)
      );
    }
  } else {
    /*for(i=0;i<x.length;i++){let e=document.querySelectorAll(x)return ( e[i].style.alignItems =y.alignItems, e[i].style.animation =y.animation , e[i].style.animationdelay =y.animationdelay , e[i].style.animationdirection =y.animationdirection , e[i].style.animationduration=y.animationduration, e[i].style.animationfillmode =y.animationfillmode , e[i].style.animationiterationcount =y.animationiterationcount , e[i].style.animationname=y.animationname, e[i].style.animationplaystate =y.animationplaystate , e[i].style.animationtimingfunction=y.animationtimingfunction, e[i].style.backfacevisibility=y.backfacevisibility, e[i].style.background =y.background , e[i].style.backgroundattachment =y.backgroundattachment , e[i].style.backgroundclip =y.backgroundclip , e[i].style.backgroundcolor =y.backgroundcolor , e[i].style.backgroundimage=y.backgroundimage, e[i].style.backgroundorigin=y.backgroundorigin, e[i].style.backgroundposition=y.backgroundposition, e[i].style.backgroundpositionx=y.backgroundpositionx, e[i].style.backgroundpositiony =y.backgroundpositiony , e[i].style.backgroundrepeat =y.backgroundrepeat , e[i].style.backgroundsize =y.backgroundsize , e[i].style.border=y.border, e[i].style.borderstyle =y.borderstyle , e[i].style.borderwidth =y.borderwidth , e[i].style.bordercolor=y.bordercolor, e[i].style.borderbottom=y.borderbottom, e[i].style.borderbottomcolor=y.borderbottomcolor, e[i].style.borderbottomleftradius=y.borderbottomleftradius, e[i].style.borderbottomrightradius =y.borderbottomrightradius , e[i].style.borderbottomstyle=y.borderbottomstyle, e[i].style.borderbottomwidth=y.borderbottomwidth, e[i].style.bordercollapse=y.bordercollapse, e[i].style.borderimage =y.borderimage , e[i].style.borderleft =y.borderleft , e[i].style.borderleftcolor=y.borderleftcolor, e[i].style.borderleftstyle =y.borderleftstyle , e[i].style.borderleftwidth =y.borderleftwidth , e[i].style.borderradius=y.borderradius, e[i].style.borderright =y.borderright , e[i].style.borderrightcolor=y.borderrightcolor, e[i].style.borderrightstyle =y.borderrightstyle , e[i].style.borderrightwidth=y.borderrightwidth, e[i].style.borderspacing=y.borderspacing, e[i].style.bordertop =y.bordertop , e[i].style.bordertopcolor =y.bordertopcolor , e[i].style.bordertopleftradius=y.bordertopleftradius, e[i].style.bordertoprightradius=y.bordertoprightradius, e[i].style.bordertopstyle=y.bordertopstyle, e[i].style.bordertopwidth =y.bordertopwidth , e[i].style.bottom=y.bottom, e[i].style.boxshadow =y.boxshadow , e[i].style.boxsizing =y.boxsizing , e[i].style.captionside=y.captionside, e[i].style.clear=y.clear, e[i].style.color =y.color , e[i].style.columns =y.columns , e[i].style.columncount =y.columncount , e[i].style.columnfill=y.columnfill, e[i].style.columngap =y.columngap , e[i].style.columnrule =y.columnrule , e[i].style.columnrulecolor =y.columnrulecolor , e[i].style.columnrulestyle =y.columnrulestyle , e[i].style.columnrulewidth =y.columnrulewidth , e[i].style.columnspan=y.columnspan, e[i].style.columnwidth=y.columnwidth, e[i].style.content =y.content , e[i].style.counterincrement=y.counterincrement, e[i].style.counterreset=y.counterreset, e[i].style.cursor=y.cursor, e[i].style.direction =y.direction , e[i].style.display =y.display , e[i].style.emptycells=y.emptycells, e[i].style.float =y.float , e[i].style.font=y.font, e[i].style.fontfamily =y.fontfamily , e[i].style.fontsize =y.fontsize , e[i].style.fontstyle =y.fontstyle , e[i].style.fontvariant=y.fontvariant, e[i].style.fontweight=y.fontweight, e[i].style.height =y.height , e[i].style.hyphens =y.hyphens , e[i].style.justifyContent =y.justifyContent , e[i].style.left =y.left , e[i].style.letterspacing =y.letterspacing , e[i].style.lineheight =y.lineheight , e[i].style.liststyle =y.liststyle , e[i].style.liststyleimage=y.liststyleimage, e[i].style.liststyleposition =y.liststyleposition , e[i].style.liststyletype =y.liststyletype , e[i].style.margin=y.margin, e[i].style.marginbottom =y.marginbottom , e[i].style.marginleft =y.marginleft , e[i].style.marginright =y.marginright , e[i].style.margintop =y.margintop , e[i].style.maxheight=y.maxheight, e[i].style.maxwidth=y.maxwidth, e[i].style.minheight=y.minheight, e[i].style.minwidth=y.minwidth, e[i].style.opacity=y.opacity, e[i].style.orphans =y.orphans , e[i].style.outline =y.outline , e[i].style.outlinecolor =y.outlinecolor , e[i].style.outlinestyle =y.outlinestyle , e[i].style.outlinewidth =y.outlinewidth , e[i].style.overflow =y.overflow , e[i].style.overflowx =y.overflowx , e[i].style.overflowy =y.overflowy , e[i].style.padding =y.padding , e[i].style.paddingbottom =y.paddingbottom , e[i].style.paddingleft =y.paddingleft , e[i].style.paddingright =y.paddingright , e[i].style.paddingtop=y.paddingtop, e[i].style.pagebreakafter =y.pagebreakafter , e[i].style.pagebreakbefore =y.pagebreakbefore , e[i].style.pagebreakinside=y.pagebreakinside, e[i].style.perspective =y.perspective , e[i].style.perspectiveorigin=y.perspectiveorigin, e[i].style.position =y.position , e[i].style.quotes =y.quotes , e[i].style.right =y.right , e[i].style.tabsize=y.tabsize, e[i].style.tablelayout =y.tablelayout , e[i].style.textalign=y.textalign, e[i].style.textalignlast=y.textalignlast, e[i].style.textdecoration =y.textdecoration , e[i].style.textdecorationcolor =y.textdecorationcolor , e[i].style.textdecorationline =y.textdecorationline , e[i].style.textdecorationstyle =y.textdecorationstyle , e[i].style.textindent =y.textindent , e[i].style.textshadow =y.textshadow , e[i].style.texttransform =y.texttransform , e[i].style.top=y.top, e[i].style.transform =y.transform , e[i].style.transformstyle =y.transformstyle , e[i].style.transition =y.transition , e[i].style.transitiondelay =y.transitiondelay , e[i].style.transitionduration =y.transitionduration , e[i].style.transitionproperty=y.transitionproperty, e[i].style.transitiontimingfunction =y.transitiontimingfunction , e[i].style.unicodebidi=y.unicodebidi, e[i].style.verticalalign=y.verticalalign, e[i].style.visibility =y.visibility , e[i].style.whitespace=y.whitespace, e[i].style.widows =y.widows , e[i].style.width=y.width, e[i].style.wordspacing =y.wordspacing , e[i].style.zindex =y.zindex )}*/
  }
}
function glow(x, i) {
  let e = ele(x).style.background;
  return (ele(x).style.boxShadow = "0px 0px " + i + "px " + e);
}
function glowTxt(x, i) {
  let e = ele(x).style.color;
  return (ele(x).style.textShadow = "0px 0px " + i + "px " + e);
}
function center(x) {
  let parent = ele(x).parentElement.nodeName;
  createStyle(parent, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
} /*End*/
