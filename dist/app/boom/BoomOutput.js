System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var lodash_1, BoomOutput;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }
        ],
        execute: function () {
            BoomOutput = (function () {
                function BoomOutput(options) {
                    this.default_title_for_rows = options.default_title_for_rows || "";
                    this.hide_first_column = options.hide_first_column;
                    this.hide_headers = options.hide_headers;
                    this.text_alignment_firstcolumn = options.text_alignment_firstcolumn || "";
                    this.text_alignment_values = options.text_alignment_values || "";
                }
                return BoomOutput;
            }());
            exports_1("BoomOutput", BoomOutput);
            BoomOutput.prototype.getDataAsHTML = function (data, sorting_props) {
                var _this = this;
                var output = {
                    body: ""
                };
                if (sorting_props && sorting_props.col_index !== undefined && sorting_props.col_index > -1) {
                    var sortFunction_1 = function (a, b, sortMethod) {
                        if (sortMethod === "asc") {
                            return a[sorting_props.col_index].value - b[sorting_props.col_index].value;
                        }
                        else {
                            return b[sorting_props.col_index].value - a[sorting_props.col_index].value;
                        }
                    };
                    data.output = data.output
                        .filter(function (a) { return !isNaN(a[sorting_props.col_index].value); })
                        .concat(data.output.filter(function (a) { return isNaN(a[sorting_props.col_index].value); }))
                        .sort(function (a, b) { return sortFunction_1(a, b, sorting_props.direction); });
                }
                lodash_1.default.each(data.output, function (o) {
                    if (o.map(function (item) { return item.hidden.toString(); }).indexOf("false") > -1) {
                        output.body += "<tr>";
                        if (_this.hide_first_column !== true) {
                            output.body += "\n                    <td style=\"padding:4px;text-align:" + _this.text_alignment_firstcolumn + "\">\n                        " + lodash_1.default.first(o.map(function (item) { return item.row_name; })) + "\n                    </td>";
                        }
                        lodash_1.default.each(o, function (item) {
                            var item_style = "padding:4px;background-color:" + item.color_bg + ";color:" + item.color_text + ";text-align:" + _this.text_alignment_values;
                            var item_display = item.link === "#"
                                ? item.display_value
                                : "<a href=\"" + item.link + "\" target=\"_blank\" style=\"color:" + item.color_text + "\">" + item.display_value + "</a>";
                            var tooltip = !item.tooltip || item.tooltip === "-"
                                ? undefined
                                : " data-toggle=\"tooltip\" data-html=\"true\" data-placement=\"auto\" title=\"" + item.tooltip + "\" ";
                            output.body += "\n                    <td style=\"" + item_style + "\">\n                        " + (tooltip ? "<span " + tooltip + ">" : "") + "\n                            " + item_display + "\n                        " + (tooltip ? "</span>" : "") + "\n                    </td>\n                ";
                        });
                        output.body += "</tr>";
                    }
                });
                return output;
            };
            BoomOutput.prototype.getDataAsDebugHTML = function (data) {
                var debugdata = "";
                debugdata = lodash_1.default.map(data, function (d) {
                    return "\n        <tr>\n            <td style=\"padding:4px;text-align:left;width:30%; title=\"Series Name\" >" + d.seriesName + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"Matching Pattern Name\" >" + (d.pattern.name || d.pattern.pattern || "Default") + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"Value : " + String(d.value_formatted || "null") + " / Raw : " + String(d.value || "null") + " / Stat : " + d.pattern.valueName + "\">" + d.display_value + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"Row name\" >" + d.row_name + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"Col name\" >" + d.col_name + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"Thresholds\" >" + d.thresholds.join(",") + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"BG Color\" >" + d.color_bg + "</td>\n            <td style=\"padding:4px;text-align:left;width:10%; title=\"Text Color\" >" + d.color_text + "</td>\n        </tr>\n        ";
                }).join("");
                return debugdata;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbU91dHB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvYm9vbS9Cb29tT3V0cHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBR0E7Z0JBUUUsb0JBQVksT0FBOEI7b0JBQ3hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsc0JBQXNCLElBQUksRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO29CQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7b0JBQ3pDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDO29CQUMzRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztnQkFDbkUsQ0FBQztnQkFDSCxpQkFBQztZQUFELENBQUMsQUFmRCxJQWVDOztZQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVMsSUFBZ0IsRUFBRSxhQUFhO2dCQUF4QyxpQkF3RHBDO2dCQXZEQyxJQUFJLE1BQU0sR0FBYztvQkFDdEIsSUFBSSxFQUFFLEVBQUU7aUJBQ1QsQ0FBQztnQkFDRixJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMxRixJQUFJLGNBQVksR0FBRyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsVUFBVTt3QkFDaEMsSUFBSSxVQUFVLEtBQUcsS0FBSyxFQUFFOzRCQUN0QixPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO3lCQUM1RTs2QkFBTTs0QkFD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QUksU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsU0FBUyxHQUFHLGdCQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFBLENBQUM7b0JBQ3JCLE9BQU8sMkdBRXNFLENBQUMsQ0FBQyxVQUFVLGdIQUNGLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFNBQVMsK0ZBQ2hFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxpQkFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsa0JBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLFdBQUssQ0FBQyxDQUFDLGFBQWEsa0dBQ3pILENBQUMsQ0FBQyxRQUFRLGtHQUNWLENBQUMsQ0FBQyxRQUFRLG9HQUNSLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrR0FDeEIsQ0FBQyxDQUFDLFFBQVEsb0dBQ1IsQ0FBQyxDQUFDLFVBQVUsbUNBRXZGLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNaLE9BQU8sU0FBUyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgSUJvb21IVE1MLCBJQm9vbVRhYmxlLCBJQm9vbVJlbmRlcmluZ09wdGlvbnMgLCBJQm9vbVNlcmllcyB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbU91dHB1dCB7XHJcbiAgcHVibGljIGRlZmF1bHRfdGl0bGVfZm9yX3Jvd3M6IFN0cmluZztcclxuICBwdWJsaWMgaGlkZV9maXJzdF9jb2x1bW46IEJvb2xlYW47XHJcbiAgcHVibGljIGhpZGVfaGVhZGVyczogQm9vbGVhbjtcclxuICBwdWJsaWMgdGV4dF9hbGlnbm1lbnRfZmlyc3Rjb2x1bW46IFN0cmluZztcclxuICBwdWJsaWMgdGV4dF9hbGlnbm1lbnRfdmFsdWVzOiBTdHJpbmc7XHJcbiAgcHVibGljIGdldERhdGFBc0hUTUw7XHJcbiAgcHVibGljIGdldERhdGFBc0RlYnVnSFRNTDtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJQm9vbVJlbmRlcmluZ09wdGlvbnMpIHtcclxuICAgIHRoaXMuZGVmYXVsdF90aXRsZV9mb3Jfcm93cyA9IG9wdGlvbnMuZGVmYXVsdF90aXRsZV9mb3Jfcm93cyB8fCBcIlwiO1xyXG4gICAgdGhpcy5oaWRlX2ZpcnN0X2NvbHVtbiA9IG9wdGlvbnMuaGlkZV9maXJzdF9jb2x1bW47XHJcbiAgICB0aGlzLmhpZGVfaGVhZGVycyA9IG9wdGlvbnMuaGlkZV9oZWFkZXJzO1xyXG4gICAgdGhpcy50ZXh0X2FsaWdubWVudF9maXJzdGNvbHVtbiA9IG9wdGlvbnMudGV4dF9hbGlnbm1lbnRfZmlyc3Rjb2x1bW4gfHwgXCJcIjtcclxuICAgIHRoaXMudGV4dF9hbGlnbm1lbnRfdmFsdWVzID0gb3B0aW9ucy50ZXh0X2FsaWdubWVudF92YWx1ZXMgfHwgXCJcIjtcclxuICB9XHJcbn1cclxuQm9vbU91dHB1dC5wcm90b3R5cGUuZ2V0RGF0YUFzSFRNTCA9IGZ1bmN0aW9uKGRhdGE6IElCb29tVGFibGUsIHNvcnRpbmdfcHJvcHMpOiBJQm9vbUhUTUwge1xyXG4gIGxldCBvdXRwdXQ6IElCb29tSFRNTCA9IHtcclxuICAgIGJvZHk6IFwiXCJcclxuICB9O1xyXG4gIGlmIChzb3J0aW5nX3Byb3BzICYmIHNvcnRpbmdfcHJvcHMuY29sX2luZGV4ICE9PSB1bmRlZmluZWQgJiYgc29ydGluZ19wcm9wcy5jb2xfaW5kZXggPiAtMSkge1xyXG4gICAgbGV0IHNvcnRGdW5jdGlvbiA9IChhLGIsc29ydE1ldGhvZCk9PntcclxuICAgICAgaWYgKHNvcnRNZXRob2Q9PT1cImFzY1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGFbc29ydGluZ19wcm9wcy5jb2xfaW5kZXhdLnZhbHVlIC0gYltzb3J0aW5nX3Byb3BzLmNvbF9pbmRleF0udmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGJbc29ydGluZ19wcm9wcy5jb2xfaW5kZXhdLnZhbHVlIC0gYVtzb3J0aW5nX3Byb3BzLmNvbF9pbmRleF0udmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBkYXRhLm91dHB1dCA9IGRhdGEub3V0cHV0XHJcbiAgICAgICAgLmZpbHRlcihhPT4gIWlzTmFOKGFbc29ydGluZ19wcm9wcy5jb2xfaW5kZXhdLnZhbHVlKSlcclxuICAgICAgICAuY29uY2F0KGRhdGEub3V0cHV0LmZpbHRlcihhPT4gaXNOYU4oYVtzb3J0aW5nX3Byb3BzLmNvbF9pbmRleF0udmFsdWUpKSlcclxuICAgICAgICAuc29ydCgoYSxiKT0+c29ydEZ1bmN0aW9uKGEsYixzb3J0aW5nX3Byb3BzLmRpcmVjdGlvbikpO1xyXG4gIH1cclxuICBfLmVhY2goZGF0YS5vdXRwdXQsIG8gPT4ge1xyXG4gICAgaWYgKG8ubWFwKGl0ZW0gPT4gaXRlbS5oaWRkZW4udG9TdHJpbmcoKSkuaW5kZXhPZihcImZhbHNlXCIpID4gLTEpIHtcclxuICAgICAgb3V0cHV0LmJvZHkgKz0gXCI8dHI+XCI7XHJcbiAgICAgIGlmICh0aGlzLmhpZGVfZmlyc3RfY29sdW1uICE9PSB0cnVlKSB7XHJcbiAgICAgICAgb3V0cHV0LmJvZHkgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6NHB4O3RleHQtYWxpZ246JHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dF9hbGlnbm1lbnRfZmlyc3Rjb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Xy5maXJzdChvLm1hcChpdGVtID0+IGl0ZW0ucm93X25hbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgIH1cclxuICAgICAgXy5lYWNoKG8sIGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBpdGVtX3N0eWxlID0gYHBhZGRpbmc6NHB4O2JhY2tncm91bmQtY29sb3I6JHtpdGVtLmNvbG9yX2JnfTtjb2xvcjoke1xyXG4gICAgICAgICAgaXRlbS5jb2xvcl90ZXh0XHJcbiAgICAgICAgfTt0ZXh0LWFsaWduOiR7dGhpcy50ZXh0X2FsaWdubWVudF92YWx1ZXN9YDtcclxuICAgICAgICBsZXQgaXRlbV9kaXNwbGF5ID1cclxuICAgICAgICAgIGl0ZW0ubGluayA9PT0gXCIjXCJcclxuICAgICAgICAgICAgPyBpdGVtLmRpc3BsYXlfdmFsdWVcclxuICAgICAgICAgICAgOiBgPGEgaHJlZj1cIiR7aXRlbS5saW5rfVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiY29sb3I6JHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY29sb3JfdGV4dFxyXG4gICAgICAgICAgICAgIH1cIj4ke2l0ZW0uZGlzcGxheV92YWx1ZX08L2E+YDtcclxuICAgICAgICBsZXQgdG9vbHRpcCA9XHJcbiAgICAgICAgICAhaXRlbS50b29sdGlwIHx8IGl0ZW0udG9vbHRpcCA9PT0gXCItXCJcclxuICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgOiBgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtaHRtbD1cInRydWVcIiBkYXRhLXBsYWNlbWVudD1cImF1dG9cIiB0aXRsZT1cIiR7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnRvb2x0aXBcclxuICAgICAgICAgICAgICB9XCIgYDtcclxuICAgICAgICBvdXRwdXQuYm9keSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiJHtpdGVtX3N0eWxlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3Rvb2x0aXAgPyBgPHNwYW4gJHt0b29sdGlwfT5gIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbV9kaXNwbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3Rvb2x0aXAgPyBgPC9zcGFuPmAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICB9KTtcclxuICAgICAgb3V0cHV0LmJvZHkgKz0gXCI8L3RyPlwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn07XHJcbkJvb21PdXRwdXQucHJvdG90eXBlLmdldERhdGFBc0RlYnVnSFRNTCA9IGZ1bmN0aW9uKGRhdGE6IElCb29tU2VyaWVzW10gKTogc3RyaW5nIHtcclxuICBsZXQgZGVidWdkYXRhID0gYGA7XHJcbiAgICBkZWJ1Z2RhdGEgPSBfLm1hcChkYXRhLCBkID0+IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzo0cHg7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOjMwJTsgdGl0bGU9XCJTZXJpZXMgTmFtZVwiID4ke2Quc2VyaWVzTmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjRweDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6MTAlOyB0aXRsZT1cIk1hdGNoaW5nIFBhdHRlcm4gTmFtZVwiID4ke2QucGF0dGVybi5uYW1lIHx8IGQucGF0dGVybi5wYXR0ZXJuIHx8IFwiRGVmYXVsdFwifTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6NHB4O3RleHQtYWxpZ246bGVmdDt3aWR0aDoxMCU7IHRpdGxlPVwiVmFsdWUgOiAke1N0cmluZyhkLnZhbHVlX2Zvcm1hdHRlZCB8fCBcIm51bGxcIil9IC8gUmF3IDogJHtTdHJpbmcoZC52YWx1ZSB8fCBcIm51bGxcIil9IC8gU3RhdCA6ICR7ZC5wYXR0ZXJuLnZhbHVlTmFtZX1cIj4ke2QuZGlzcGxheV92YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjRweDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6MTAlOyB0aXRsZT1cIlJvdyBuYW1lXCIgPiR7ZC5yb3dfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjRweDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6MTAlOyB0aXRsZT1cIkNvbCBuYW1lXCIgPiR7ZC5jb2xfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjRweDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6MTAlOyB0aXRsZT1cIlRocmVzaG9sZHNcIiA+JHtkLnRocmVzaG9sZHMuam9pbihcIixcIil9PC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzo0cHg7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOjEwJTsgdGl0bGU9XCJCRyBDb2xvclwiID4ke2QuY29sb3JfYmd9PC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzo0cHg7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOjEwJTsgdGl0bGU9XCJUZXh0IENvbG9yXCIgPiR7ZC5jb2xvcl90ZXh0fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihgYCk7XHJcbiAgICByZXR1cm4gZGVidWdkYXRhO1xyXG59O1xyXG4iXX0=